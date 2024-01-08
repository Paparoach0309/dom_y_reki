FROM srv-artprod-001.main.velcom.by:5557/node:18-alpine as builder
ARG build=null
ARG commit=null
ARG ver_tag=null
RUN export http_proxy=http://10.254.42.61:3128 &&  \
    export https_proxy=http://10.254.42.61:3128 && \
    export no_proxy=.main.velcom.by

WORKDIR /app
COPY . ./
RUN sed -i "s/<TAG>/$ver_tag/g;s/<COMMIT>/$commit/g" src/version.js
RUN npm install --legacy-peer-deps --registry http://srv-artprod-001.main.velcom.by/artifactory/api/npm/NPM
RUN npm run dockerbuild


FROM srv-artprod-001.main.velcom.by:9000/node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing

#COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
#COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000
ENV PORT 3000
#CMD ["node", "server.js"]
CMD ["npm", "start"]


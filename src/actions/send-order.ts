export interface IRequest {
    [key: string]: string
    productCode: string
    productName: string
    productHref: string
    companyName: string
    unp: string
    howShouldWeCallYou: string
    phoneNumber: string
    Group: string
    comment: string
    post: string
    email: string
    contractNumber: string
    additionalServices: string
    simCardCount: string
}
export async function sendOrder(data: IRequest) {
    const formData = new URLSearchParams()
    for (const key in data) {
        formData.append(key, data[key])
    }
    return await fetch('https://crm.a1.by/pub/local/lead_import_site/index.php',
        {
            mode: 'no-cors',
            method: 'POST',
            body: formData,
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },})
}
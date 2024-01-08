import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Stack,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Select,
  MenuItem,
  OutlinedInput,
  Theme,
  useTheme,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { StyledTextField } from "@/app/components/styled/StyledTextField";
import BpCheckbox from "@/app/components/BpCheckbox";
import { useAppSelector } from "@/app/store/hooks";
import { selectUserData } from "@/app/store/selectors";
import { useActions } from "@/app/store/allActions";
import { sendOrder } from "@/actions/send-order";
import CloseIcon from "@mui/icons-material/Close";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tariffs = [
  "Не определился",
  "Small",
  "Medium",
  "Enterprise",
  "Enterprise +",
  "Phishing Small",
  "Phishing Medium",
  "Phishing Enterprise",
  "Phishing Enterprise +",
  "Phishing Light",
];

function getStyles(name: string, personName: string, theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ResultUserData = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [tariff, setTariff] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTariff(event.target.value as string);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { setFormSend } = useActions();
  const userData = useAppSelector(selectUserData);
  const [isLoading, setLoading] = useState(false);
  const clickHandler = async () => {
    if (userData.isErrorForm) {
      return null;
    }
    setLoading(true);
    const response = await sendOrder({
      Group: "",
      additionalServices: "",
      comment:
        (tariff === ""
          ? "Тариф не выбран."
          : "Выбранный тариф " + tariff + ".") +
        "\n" +
        userData.comment,
      // comment: `Выбранный тариф ${tariff === "" ? "тариф не выбран" : tariff} \n ${userData.comment}`,
      companyName: userData.nameCompany,
      contractNumber: userData.telWork,
      email: userData.emailWork,
      howShouldWeCallYou: "",
      phoneNumber: userData.telWork,
      post: "",
      productCode: "",
      productHref: "https://a1data.by/securityawareness",
      productName: "Security Awareness",
      simCardCount: "",
      unp: "",
      utm_source: "A1DataBy",
      utm_medium: "",
    });
    setFormSend(true);
    setLoading(false);
  };
  const { editUserData } = useActions();

  const handleEditUserData = (e: ChangeEvent<HTMLInputElement>) => {
    editUserData({ name: e.target.name, value: e.target.value });
  };

  const handleEditUserCheck = (e: ChangeEvent<HTMLInputElement>) => {
    editUserData({ name: e.target.name, value: e.target.checked });
  };

  useEffect(() => {
    if (
      userData.comment.length > 1 &&
      userData.telWork.length > 1 &&
      userData.emailWork.length > 1 &&
      userData.nameCompany.length > 1 &&
      userData.isConsultation === true
    ) {
      editUserData({ name: "isErrorForm", value: false });
    } else {
      editUserData({ name: "isErrorForm", value: true });
    }
  }, [userData]);

  return (
    <>
      <Stack width={{ lg: "100%", md: "100%" }} order={{ lg: 2, xs: 1 }}>
        <Typography
          style={{
            fontSize: "16px",
            fontFamily: "A1Sans-Bold",
            paddingBottom: "23px",
          }}
        >
          Ваши данные
        </Typography>
        <StyledTextField
          hiddenLabel
          name={"nameCompany"}
          onChange={handleEditUserData}
          placeholder="Как к вам обращаться*"
        />
        <Stack
          direction={{ md: "column", lg: "row" }}
          spacing={{ xs: 4, lg: 3 }}
          pt={3}
        >
          <StyledTextField
            hiddenLabel
            name={"telWork"}
            onChange={handleEditUserData}
            placeholder="Номер телефона*"
          />
          <StyledTextField
            hiddenLabel
            name={"emailWork"}
            onChange={handleEditUserData}
            placeholder="E-mail*"
          />
        </Stack>
        <Stack pt={3}>
          <Select
            color={"error"}
            displayEmpty
            value={tariff}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <span style={{ color: "#A4A4A4", fontSize: "14px", fontWeight: 300 }}>Выберите тариф</span>;
              }
              return selected;
            }}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  border: "1px solid #red",
                },
              },
            }}
            id="simple-select"
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {tariffs.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={{
                  ...getStyles(name, tariff, theme),
                  borderTop: "0.5px solid #ededed",
                  height: "40px"
                }}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </Stack>
        <StyledTextField
          hiddenLabel
          multiline
          rows={4}
          name={"comment"}
          onChange={handleEditUserData}
          placeholder="Примечание"
          sx={{ mt: 3 }}
        />
        <Stack
          direction={"row"}
          spacing={2}
          pt={3}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"}>
            <BpCheckbox
              checked={userData.isConsultation}
              onChange={handleEditUserCheck}
              name={"isConsultation"}
            />
            <Typography sx={{ fontSize: "16px", ml: "10px" }}>
              Я согласен{" "}
              <Typography
                component="span"
                sx={{ color: "red", cursor: "pointer" }}
                onClick={handleClickOpen}
              >
                с условиями обработки
              </Typography>{" "}
              данных
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            order={2}
            justifyContent={{ xs: "center", lg: "center" }}
          >
            <Button
              variant="contained"
              disabled={userData.isErrorForm || isLoading}
              onClick={() => clickHandler()}
              sx={{
                ":hover": {
                  background: "var(--primary-red-accent, #EB140A)",
                },
                borderRadius: "10px",
                background: "var(--primary-red-accent, #EB140A)",
                width: { lg: "290px", xs: "100%" },
                height: "45px",
                color: "#fff",
                fontSize: "16px",
                fontFamily: "A1Sans-Bold",
              }}
            >
              Отправить
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography>Условия обработки данных</Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            height: "50vh",
            boxShadow: 24,
            p: 3,
            overflowY: "scroll",
          }}
        >
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Настоящим Я выражаю свое свободное, однозначное и информированное
            согласие на обработку предоставленных мною персональных данных
            Унитарное предприятие A1, зарегистрированному по адресу: г.
            Минск,ул. Интернациональная, д.36, пом. 2 (далее по тексту –
            Оператор), в соответствии с указанными ниже сведениями: <br />
            1. Оператор может совершать следующие действия с моими персональными
            данными: сбор, систематизация, хранение, изменение, использование,
            обезличивание, блокирование, распространение, предоставление,
            удаление персональных данных. <br />
            2. Согласие выдано мною на обработку следующих персональных данных:
            - Название компании; - Как к вам обращаться; - Телефон с кодом
            оператора; - E-mail; - Тип посетителя; - Комментарий. <br />
            3. Оператор может обрабатывать мои персональные данные в следующих
            целях: - для предоставления мне услуг/работ; - направления в мой
            адрес уведомлений, касающихся предоставляемых услуг/работ; -
            подготовки и направления ответов на мои запросы. а также, с моего
            согласия, которое я настоящим выражаю, для направления в мой адрес
            информации, в том числе рекламной, о
            мероприятиях/товарах/услугах/работах Оператора. <br />
            4. Способы обработки персональных данных: с использованием средств
            автоматизации, без их использования, смешанным способом. <br />
            5. Оператор может вносить мои персональные данные в системы
            Битрикс24 и 1С-Битрикс, тем самым поручая обработку моих
            персональных данных ИУП «1С Битрикс», УНП 192042385, юридический
            адрес: 220035, г. Минск, пр-т Победителей, д. 59, оф. 202, как
            уполномоченному лицу. <br />
            6. Срок действия согласия – до момента его отзыва. <br />
            7. Предоставляя свое согласие на обработку персональных данных, я
            подтверждаю, что мне были разъяснены мои права как субъекта
            персональных данных и механизм их реализации: а) право на получение
            сведений об обработке персональных данных Оператором; б) право на
            получении информации о предоставлении информации уполномоченным
            лицам; в) право на внесение изменений в свои персональные данные; г)
            право требовать прекращения обработки персональных данных и их
            удаления; д) право на отзыв согласия на обработку. Для реализации
            одного или нескольких из вышеуказанных прав, необходимо направить
            Оператору заявление, в котором должны быть указаны: фамилия, имя,
            отчество (если имеется); адрес места жительства (места пребывания);
            дата рождения; изложение сути требований; личная подпись или
            электронная цифровая подпись. Для реализации прав из п. а – г
            необходимо направить Оператору данное заявление: - в письменной
            форме по адресу: г. Минск,ул. Интернациональная, д.36, пом. 2. - в
            виде электронного документа на электронный адрес: legal@a1.by. Для
            реализации права на отзыв (п. д) необходимо сообщить Оператору о
            своем намерении отозвать согласие на электронный адрес legal@a1.by
            или направить Оператору заявление: - в письменной форме на адрес: г.
            Минск,ул. Интернациональная, д.36, пом. 2. - в виде электронного
            документа на электронный адрес: legal@a1.by. 8. Я осведомлен (-а) о
            том, что отказ от дачи согласия на обработку моих персональных
            данных или прекращение обработки персональных данных Оператором
            может сделать невозможным получение мной информации о
            мероприятиях/товарах/услугах/работах Оператора. Согласие на
            обработку персональных данных
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ResultUserData;

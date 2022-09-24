import { useEffect } from "react";
import { WOOPPAY_API_URL } from "../constants";

const frameType = "recharge";
const frame_result_load = "4";
const frame_result_success = "1";
const frame_result_error = "3";
const frame_result_authorisation_error = "2";
const frame_result_form_send = "8";

const errors_text = {
  e_04: "Карта заблокирована. Для снятия ограничений, позвоните в Колл-центр вашего банка.",
  e_05: "Транзакция отклонена. Позвоните в Колл-центр вашего банка.",
  e_07: "Карта заблокирована. Для снятия ограничений, позвоните в Колл-центр вашего банка.",
  e_12: "Недействительная транзакция, перепроверьте введенные данные. В случае повторения ошибки попробуйте позже...",
  e_14: "Недействительный номер карты.",
  e_15: "Недействительный номер карты.",
  e_19: "Ошибка авторизации.",
  e_30: "Переданы неверные данные для оплаты/пополнения. Обратитесь в службу поддержки.",
  e_36: "Карта заблокирована. Для снятия ограничений, позвоните в Колл-центр вашего банка.",
  e_37: "По карте выставлены ограничения. Для снятия ограничений, позвоните в Колл-центр вашего банка.",
  e_41: "Карта, числится в базе утерянных. Позвоните в Колл-центр вашего банка.",
  e_43: "Карта, числится в базе утерянных. Позвоните в Колл-центр вашего банка.",
  e_45: "Карта, числится в базе украденых. Позвоните в Колл-центр вашего банка, либо обратиться в ближайшее отделение полиции.",
  e_51: "Недостаточно средств на карте.",
  e_54: "Истёк срок действия карты.",
  e_57: "Карта закрыта для интернет-транзакций. Обратитесь в ваш банк.",
  e_58: "Операции с картами временно приостановлены. Попробуйте позже.",
  e_61: "Сумма превышает допустимый суточный лимит. Можете обратиться в службу поддержки, либо завершить операцию завтра.",
  e_62: "Карта заблокирована банком. Позвоните в Колл-центр вашего банка.",
  e_91: "Ваш банк временно не доступен. Попробуйте оплатить позже.",
  e_96: "Не установлен 3DSecure(SecureCode) либо сбой связи. Позвоните в Колл-центр вашего банка.",
};

export default function usePaymentFrameHandler(onSuccess: () => void) {
  const messageHandler = (event: MessageEvent<any>) => {
    if (!event.data || event.origin !== WOOPPAY_API_URL) {
      return;
    }
    let message;
    try {
      message = JSON.parse(event.data);
    } catch (e) {
      return;
    }
    console.log("msg data ", message);
    if (!message || message.source !== frameType) {
      return;
    }

    let err_info = "";
    if (message.data && typeof message.data.errorCode !== "undefined") {
      var err_key = "e_" + message.data.errorCode;
      if (err_key in errors_text) {
        err_info = (errors_text as any)[err_key];
      }
    }
    if (message.status == frame_result_load) {
      // место реакции на завершение рендера фрейма
      // window.location = "js-call://message?data=4";
      console.log("load");
    } else if (message.status == frame_result_success) {
      //место реакции на событие успешной валидация и отправки карточной формы
      let referenceId = "";
      if ("data" in message) {
        referenceId =
          "referenceId" in message.data
            ? "&reference=" + message.data.referenceId
            : "";
      }
      onSuccess();
    } else if (message.status == frame_result_error) {
      // место реакции на ошибку фрейма
      if (err_info == "") {
        err_info =
          "Произошла ошибка. Скорее всего вы ввели некорректные данные карты";
      }
      alert(err_info);
    } else if (message.status == frame_result_authorisation_error) {
      //место реакции на неверную авторицию фрейма.
      if (err_info == "") {
        err_info =
          "Произошла ошибка. Возможно вы ввели некорректные данные карты";
      }
      alert(err_info);
    } else if (message.status == frame_result_form_send) {
      //место реакции на событие отправки формы
      // window.location = "js-call://message?data=8&error=" + encodeURI(err_info);
    }
  };

  useEffect(() => {
    window.addEventListener("message", messageHandler);

    return () => {
      window.removeEventListener("message", messageHandler);
    };
  });
}

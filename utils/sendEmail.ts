import axios, { AxiosResponse } from "axios";
import { ContactFromType } from "../src/Components/footer";

type SendGridTypes = {
  sendEmail: (
    msg: ContactFromType
  ) => Promise<AxiosResponse<ContactFromType> | undefined>;
};

export const useSend = (): SendGridTypes => {
  const sendEmail = async (msg: ContactFromType) => {
    try {
      const value = localStorage.getItem("myValue");

      if (value === "true") {
        alert("Thanks Again! We'll reach out as soon as possible");
      } else {
        return await axios.post(
          "https://blu-landing.azurewebsites.net/api/HttpSendSendgridEmail?code=bDvKG0xdME-0IM91LjIm3ATjYHijEH0M1GjDBdEjxTisAzFucPbuSw%3D%3D",
          {
            email: msg.email,
            phone: msg.phone,
            reason: msg.reason,
            fullName: msg.fullName,
          }
        );
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.message);
        console.error("Error code:", error.code);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
          alert("There's an error on our side");
        } else if (error.request) {
          console.error("Request:", error.request);
        }
      } else {
        console.error("General error:", error);
      }
    }
  };

  return {
    sendEmail,
  };
};

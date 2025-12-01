import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import { TriangleAlert } from "lucide-react";
import { useState } from "react";
import { DeleteAccountModal } from "./DeleteAccountModal";
import { useDeleteUserMutation } from "../../../hooks/queries/useUserQuery";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../router/routes";
import { useAuthStore } from "../../../store/auth.store";
import { ButtonColor } from "../../../constants/buttonColors";

export const DeleteAccount = () => {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { mutateAsync: deleteUser, isPending } = useDeleteUserMutation();
  const navigate = useNavigate();
  const setUserAndToken = useAuthStore((state) => state.setUserAndToken);

  const handleAccountDeletion = async () => {
    try {
      const res = await deleteUser();
      toast.success(res.message);
      setUserAndToken(null, null);
      setIsOpenModal(false);
      navigate(ROUTE_PATHS.HOME);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message = err.response?.data?.message || t("register.serverError");
      toast.error(message);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4 items-start">
        <div className="w-full flex flex-row justify-center gap-2 text-red-800">
          <TriangleAlert className="w-5 h-5 sm:w-6 sm:h-6" />
          <p>{t("profile.actions.settings.deleteAccount.warning")}</p>
        </div>
        <p className="text-orange-400">
          {t("profile.actions.settings.deleteAccount.warningText")}
        </p>
        <div className="w-full flex flex-row gap-2 justify-center items-center">
          <Button
            buttonColor={ButtonColor.danger}
            onClick={() => setIsOpenModal(true)}
            disabled={isPending}
          >
            {t("profile.actions.settings.deleteAccount.deleteButtonTitle")}
          </Button>
          <DeleteAccountModal
            isOpen={isOpenModal}
            onAccept={handleAccountDeletion}
            onClose={() => setIsOpenModal(false)}
          ></DeleteAccountModal>
        </div>
      </div>
    </>
  );
};

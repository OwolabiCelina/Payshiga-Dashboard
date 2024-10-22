import AccountIcon from "../../../../assets/icons/account.icons";
import CardIcon from "../../../../assets/icons/card.icons";
import ContactIcons from "../../../../assets/icons/contact.icons";
import DashboardIcons from "../../../../assets/icons/dashboard.icons";
import EcommerceIcons from "../../../../assets/icons/ecommerce.icons";
import ManageBillsIcons from "../../../../assets/icons/managebills.icons";
import PaymentIcon from "../../../../assets/icons/payment.icons";
import RefundIcon from "../../../../assets/icons/refund.icon";
import SettingsIcons from "../../../../assets/icons/settings.icons";
import TransactionIcon from "../../../../assets/icons/transaction.icon";

export const SIDE_BAR_LINKS = {
  top: [
    {
      label: "Dashboard",
      href: "/",
      icon: DashboardIcons,
    },
    {
      label: "Transactions",
      href: "/transactions",
      icon: TransactionIcon,
    },
    {
      label: "Refunds",
      href: "/refunds",
      icon: RefundIcon,
    },
    {
      label: "Payments",
      href: "/payments",
      icon: PaymentIcon,
    },
    {
      label: "Cards",
      href: "/cards",
      icon: CardIcon,
    },
    {
      label: "Accounts",
      href: "/accounts",
      icon: AccountIcon,
    },
    {
      label: "Manage Bills",
      href: "/manage-bills",
      icon: ManageBillsIcons,
    },
    {
      label: "Ecommerce",
      href: "/ecommerce",
      icon: EcommerceIcons,
    },
  ],
  bottom: [
    {
      label: "Settings",
      href: "/settings",
      icon: SettingsIcons,
    },
    {
      label: "Contact us",
      href: "/contact-us",
      icon: ContactIcons,
    },
  ],
};

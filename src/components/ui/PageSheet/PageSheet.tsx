import styles from "./PageSheet.module.scss";

interface PageSheetProps {
  children: React.ReactNode;
}

const PageSheet = ({ children }: PageSheetProps) => {
  return <div className={styles.page}>{children}</div>;
};

PageSheet.displayName = "ui.PageSheet";
export default PageSheet;

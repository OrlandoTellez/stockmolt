import { SideBar } from "./SideBar";
import styles from "./DashboardLayout.module.css";

interface DashboardLayout {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayout) => {
  return (
    <>
      <div className={styles.container}>
        <header>
          <SideBar />
        </header>
        <main className={styles.content}>{children}</main>
      </div>
    </>
  );
};

import Navbar from '../components/dashboard/Navbar/Navbar';
import Sidebar from '../components/dashboard/Sidebar/Sidebar';
import styles from './dashboard.module.scss';

const Layout = ({children}) => {
    return (
      <div className={styles.layout_container}>
        <div className={styles.layout_menu}><Sidebar /></div>
        <div className={styles.layout_content}>
            <Navbar />
            {children}
        </div>
      </div>
    )
  }
  
  export default Layout
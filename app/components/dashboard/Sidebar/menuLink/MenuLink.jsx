import Link from "next/link"
import styles from './styles.module.scss';
import { usePathname } from "next/navigation";

const MenuLink = ({item}) => {
  const pathname = usePathname();

    return (
        <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
        {item.icon}
        {item.title}
      </Link>
    )
}

export default MenuLink
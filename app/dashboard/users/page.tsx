import Link from 'next/link'
import Image from 'next/image'
import Search from '../../components/dashboard/search/search'
import Pagination from '../../components/dashboard/pagination/pagination'
import styles from '../../components/dashboard/users/styles.module.scss'

const Users = ({placeholder}) => {
    return (
        <div className={styles.users_container}>
          <div className={styles.users_top}>
            <Search placeholder={placeholder} />
         <Link href="/dashboard/users/add">
         <button className={styles.users_addbtn}>
                Add New
        </button>
        </Link>
          </div>
          <div className={styles.users_table}>
            <table className={styles.users_table}>
            <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className={styles.users_user}>
                        <Image src="/noavatar.png" width={40} height={40} alt=""  className={styles.users_userimg} />
                        Joe Doe
                    </div>
                </td>
                <td>
                Joe Doe@gmail.com
                </td>
                <td>13.02.23</td>
                <td>Admin</td>
                <td>active</td>
                <td>
                    <div className={styles.users_buttons}>
                    <Link href='/test'>
                        <button className={`${styles.users_button} ${styles.users_view}`}>
                            view
                        </button>
                    </Link>
                    <button className={`${styles.users_button} ${styles.users_delete}`}>
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
            </table>
            <Pagination />
            </div>
        </div>
    )
}

export default Users
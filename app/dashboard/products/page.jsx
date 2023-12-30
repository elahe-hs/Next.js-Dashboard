import Image from 'next/image'
import Link from 'next/link'
import Search from '../../components/dashboard/search/search'
import Pagination from '../../components/dashboard/pagination/pagination'
import styles from '../../components/dashboard/products/styles.module.scss'

const Products = () => {
    return (
        <div className={styles.users_container}>
        <div className={styles.users_top}>
          <Search placeholder="search for a product ..." />
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
        <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
        </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                  <div className={styles.users_product}>
                      <Image src="/noproduct.jpg" width={40} height={40} alt=""  className={styles.users_userimg} />
                      Iphone
                  </div>
              </td>
              <td>
              descr
              </td>
              <td>$9999</td>
              <td>Admin</td>
              <td>stock</td>
              <td>
                  <div className={styles.users_buttons}>
                  <Link href='/'>
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

export default Products
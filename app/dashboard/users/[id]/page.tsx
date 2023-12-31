import styles from "../../../components/dashboard/users/singleUser/styles.module.scss";
import Image from "next/image";

const SingleUserPage = async () => {
  

  return (
    <div className={styles.user_container}>
      <div className={styles.user_infoContainer}>
        <div className={styles.user_imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        elahee
      </div>
      <div className={styles.user_formContainer}>
        <form className={styles.user_form}>
          <input type="hidden" name="id" />
          <label>Username</label>
          <input type="text" name="username" placeholder={""} />
          <label>Email</label>
          <input type="email" name="email" placeholder={""} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={""} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={""} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option >Yes</option>
            <option >No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option>Yes</option>
            <option>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
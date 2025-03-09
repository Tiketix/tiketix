"use client"
import Link from "next/link";
import style from "./crumbs.module.css"
import { useRouter } from "next/router";

const BreadCrumbs = () => {
  const router = useRouter();
  const pathArray = router.asPath.split("/").filter((x) => x);
  const categoryIndex = pathArray.indexOf("categories");
  const crumbs = pathArray.slice(categoryIndex);

  if(!crumbs.length) return null;
  return (
    <nav aria-label="breadcrumb">
      <ol className={style.breadcrumb}>
        <li className={style.breadcrumbItem}>
          <Link href="/">
            <a className={style.breadcrumbLink}>Home</a>
          </Link>
        </li>
        {crumbs.map((crumb, index) => {
          const href = `/${crumbs.slice(0, index + 1).join("/")}`;
          return (
            <li key={crumb} className={style.breadcrumbItem}>
              <Link href={href}>
                <a className={style.breadcrumbLink}>{crumb}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  )
}

export default BreadCrumbs;



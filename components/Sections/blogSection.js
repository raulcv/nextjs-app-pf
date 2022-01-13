import React from 'react'
import { useRouter } from "next/router";
// import CustomLink from "../Navigation/customLink";
import Link from 'next/link';
import Image from "next/image";
import styles from "../../styles/Blog.module.scss";
import * as Unicons from "@iconscout/react-unicons";

function blogComponent ({ blog }) {
  // console.log(blog)
  return (
        <div className={`${styles.blog__content}`}>
          <div className={styles.blog__img_body}>
          <Link href='/blog/[bid]' as={`/blog/${blog.id}`} >            
            <div className={styles.blog__img_container}>
              <Image className={styles.blog__img} src={`/img/${blog.img}`} alt="blog image" width={blog.imgwidth} height={blog.imgheight} objectFit="cover"></Image>
            </div>
            </Link>
            <div className={styles.blog__data}>
              <h3 className={styles.blog__title}>{blog.title}</h3>
              <p className={styles.blog__description}>{blog.description}</p>
            </div>
          </div>
          <div className={styles.blog__img_footer}>
            {/* <CustomLink href={{pathname: '/blog/[bid]', query: { bid: blog.id }}} className={styles.blog__button}> Details */}
            {/* <CustomLink href={`/blog/${blog.id}`} className={styles.blog__button}> Details
            <i className={styles.button__icon}><Unicons.UilArrowRight /></i>
            </CustomLink> */}
            <Link href='/blog/[bid]' as={`/blog/${blog.id}`} >
              <a className={styles.blog__button}>Details
                <i className={styles.button__icon}><Unicons.UilArrowRight /></i>
              </a>
            </Link>
          </div>
        </div>
  )
}

export default blogComponent;

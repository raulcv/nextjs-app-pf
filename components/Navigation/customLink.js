import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as styles from "../../styles/Header.module.scss";

export default  NavLink;

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, exact, children, ...props }) {
    const { pathname } = useRouter();
    // const isActive = exact ? pathname === href : pathname.startsWith(href);
    let isObject = typeof href === 'object'? true : false;
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    // console.log(ref);
    // console.log(props);
    if (isActive) {
        props.className += ' '+styles.active_link;
    }

    return (
        <Link href={isObject? href.pathname : href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}
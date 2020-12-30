import {Link} from 'next/link';
import React, {Fragment} from "react";


export default function IndexPage() {
    return <Fragment>
        <p>Hello World.{' '}</p>
        <Link href={"/about"}><a>About Us</a></Link>
    </Fragment>;
}

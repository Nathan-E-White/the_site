import Link from 'next/link';
import React, {Fragment} from "react";


const IndexPage = () => <Fragment>
    <p>Hello World.{' '}</p>
    <Link href={"/about"}><a>About</a></Link>
    <br/>
    <Link href={"/contact"}><a>Contact</a></Link>
    <br/>
</Fragment>;

export default IndexPage;

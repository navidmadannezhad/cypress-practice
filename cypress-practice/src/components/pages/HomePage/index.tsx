import React, { useEffect, useState } from "react";
import Link from "next/link";

const HomePage = () => {

    const [counter, setCounter] = useState<number>(0);

    return(
        <div>

            <p>This is home</p>

            <Link href="/" onClick={() => {setCounter(counter => counter+1)}}>Click on me</Link>

            <span>
                {counter}
            </span>

        </div>
    )
}

export default HomePage;
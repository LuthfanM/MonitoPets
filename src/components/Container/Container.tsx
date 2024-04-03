"use client";
import React, { Children } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Container = ({ id, extended, children }: { id: string; extended?: boolean, children: any }) => {
    return (
        <main id={"main-" + id}>
            <Header extended={extended} />
            <div style={{ flexGrow: 1 }}>
                <React.Fragment>{children}</React.Fragment>
            </div>
            <Footer />
        </main>
    );
};

export default Container;

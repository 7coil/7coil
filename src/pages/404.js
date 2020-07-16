import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const ErrorPage = () => (
  <Layout>
    <p style={{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '10em'
    }}>
      404
    </p>
    <p style={{
      textAlign: 'center',
    }}>
      <Link to="/">Maybe you should go home</Link>
    </p>
  </Layout>
)


export default ErrorPage

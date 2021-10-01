import { Button, Link, ListItem } from '@material-ui/core';
import { ListItemText } from '@mui/material';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ReactStars from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div>
      <h1
        className="text-2xl text-center mt-8 font-semibold my-11 font-size: 25px alignItems: right"
        color="red"
      >
        Welcome To Review Page.
      </h1>
      <p>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{' '}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-1xl font-semibold my-15 text-align:right">
          Amit Kumar Singh
        </span>
      </p>
      <ReactStars
        count={5}
        size={24}
        value={5}
        activeColor="#ffd700"
        edit={false}
      />
      <p className="text-1xl text- mt-4 font-semibold my-3">
        Great Useful Product
      </p>

      <p className="flex items-center mt-2">
        Awesome abd intresting product by amazon. Quality is superbb and
      </p>

      <p className="flex items-center mt-2">
        adhesive quality of this product is also good. Suitable for Hanging key
      </p>

      <p className="flex items-center mt-2">
        rings, chain, towels, headphones and etc.
      </p>
      <Button type="button" color="primary" round="true">
        Edit
      </Button>

      <Button type="button" color="success" round="true">
        Delete
      </Button>
      <p className="mt-20"> </p>

      <p>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{' '}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-1xl mt-16 font-semibold my-22">Richa Sharma</span>
      </p>
      <ReactStars
        count={5}
        size={24}
        value={5}
        activeColor="#ffd700"
        edit={false}
      />

      <p className="text-1xl text- mt-4 font-semibold my-3">
        Great Useful Product
      </p>

      <p className="flex items-center mt-2">
        Awesome abd intresting product by amazon. Quality is superbb and
      </p>

      <p className="flex items-center mt-2">
        adhesive quality of this product is also good. Suitable for Hanging key
      </p>

      <p className="flex items-right mt-2">
        rings, chain, towels, headphones and etc.
      </p>
      <p className="flex items-justified mt-4 my -4">
        thank you for your review.
      </p>

      <Button type="button" color="primary" round="true" my-9>
        Edit
      </Button>

      <Button type="button" color="success" round="true">
        Delete
      </Button>
      <p className="mt-8">
        <Button type="button" color="info" round="true">
          previous
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="button" color="success" round="true">
          next
        </Button>
      </p>
    </div>
  );
}

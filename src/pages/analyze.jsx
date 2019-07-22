import React, { Component } from 'react';
import axios from 'axios';
import keys from '../utils/apikeys';
import Layout from '../components/layout';
import Image from '../components/imageCard';

const cat_key = keys.cat;
class Analayze extends Component {
    constructor() {
        super();
    }
    state = {
        breed: [],
        cats: [],
        queries: ''
    };

    componentDidMount() {
        axios({
            method: 'get',
            url: `https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&limit=10&order=Desc`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'x-api-key': `${cat_key}`
            }
        })
            .then(({ data }) => data)
            .then(cats => this.setState({ cats }));

        axios({
            method: 'get',
            url: `https://api.thecatapi.com/v1/breeds`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'x-api-key': `${cat_key}`
            }
        })
            .then(({ data }) => data)
            .then(breeds => {
                console.log(breeds);
                this.setState({ breeds });
            });
    }
    render() {
        const { cats, breeds } = this.state;
        console.log(cats);
        return (
            <>
                <Layout pageTitle="Analyze The Cats">
                    <section className="displayCats">
                        <p>some stuff here</p>
                        {cats.map(cat => (
                            <Image key={cat.id} animal={cat} />
                        ))}
                    </section>
                </Layout>
            </>
        );
    }
}

export default Analayze;

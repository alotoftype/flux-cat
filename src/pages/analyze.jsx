import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import keys from '../utils/apikeys';
import Layout from '../components/layout';
import OptionSelector from '../components/optionSelect';
import Image from '../components/imageCard';
import page_links from '../components/page_links';

const cat_key = keys.cat;

class Analayze extends Component {
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
        console.log('this is my cat apikey: ', keys.cat);
        return (
            <>
                <Layout pageTitle="Analyze The Cats" links={page_links}>
                    <OptionSelector animals={breeds} />
                    <DisplayCats>
                        {cats.map(cat => (
                            <Image key={cat.id} animal={cat} />
                        ))}
                    </DisplayCats>
                </Layout>
            </>
        );
    }
}
const DisplayCats = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
`;
export default Analayze;

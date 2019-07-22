import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import keys from '../utils/apikeys';
import Layout from '../components/layout';
import OptionSelector from '../components/optionSelect';
import SortSelector from '../components/sortSelector';
import Image from '../components/imageCard';
import page_links from '../components/page_links';

const cat_key = keys.cat;

class Analayze extends Component {
    state = {
        breed: [],
        cats: [],
        sortValue: '',
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
    sortCats = (sort = 'Desc', breed_id = 'abys') => {
        axios({
            method: 'get',
            url: `https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&limit=5&order=${sort}&breed_ids=${breed_id}`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'x-api-key': `${cat_key}`
            }
        })
            .then(({ data }) => data)
            .then(cats => this.setState({ cats }));
    };

    handleChangeBreed = e => {
        this.setState({ queries: e.target.value });
        this.sortCats(this.state.sortValue, this.state.queries);
    };
    handleChangeSort = e => {
        this.setState({ sort: e.target.value });
        this.sortCats(this.state.sortValue, this.state.queries);
    };
    render() {
        const { cats, breeds } = this.state;
        //console.log(cats);
        return (
            <>
                <Layout pageTitle="Analyze The Cats" links={page_links}>
                    <OptionSelector
                        animals={breeds}
                        handleChange={this.handleChangeBreed}
                    />
                    <SortSelector handleChange={this.handleChangeSort} />
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

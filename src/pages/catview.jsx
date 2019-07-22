import React, { Component } from 'react';
import axios from 'axios';
import keys from '../utils/apikeys';
import ImageGallery from 'react-image-gallery';
import Layout from '../components/layout';
import OptionSelector from '../components/optionSelect';
import page_links from '../components/page_links';
import 'react-image-gallery/styles/css/image-gallery.css';

const cat_key = keys.cat;
class Catview extends Component {
    constructor() {
        super();

        this.state = {
            cats: [],
            breeds: [],
            queries: ''
        };
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&limit=20&page=10&order=Desc`,
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
                this.setState({ breeds });
            });
    }
    handleChange = e => {
        this.setState({ queries: e.target.value });
        this.getCatbyBreed(this.state.queries);
    };

    getCatbyBreed = breed_id => {
        axios({
            method: 'get',
            url: `https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&limit=5&breed_ids=${breed_id}`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'x-api-key': `${cat_key}`
            }
        })
            .then(({ data }) => data)
            .then(cats => this.setState({ cats }));
    };
    render() {
        const { cats, breeds, queries } = this.state;
        // console.log(cats);
        const galleryImages = cats.map(cat => {
            let obj = {};
            obj.id = cat.id;
            obj.original = cat.url;
            obj.thumbnail = cat.url;
            obj.info = cat.breeds[0] || 'No Info';
            if (cat.breeds[0] !== null && cat.breeds[0] !== undefined) {
                obj.description = cat.breeds[0].description;
                // console.log(obj.info.description);
            } else {
                obj.description = 'No Description';
            }
            // console.log('new obj:', obj);
            return obj;
        });

        return (
            <>
                <Layout pageTitle="Cat Application" links={page_links}>
                    <section>
                        <OptionSelector
                            animals={breeds}
                            queries={queries}
                            handleChange={this.handleChange}
                        />
                    </section>
                    <section>
                        <ImageGallery
                            items={galleryImages}
                            lazyLoad={true}
                            showBullets={true}
                            showThumbnails={false}
                        />
                    </section>
                </Layout>
            </>
        );
    }
}

export default Catview;

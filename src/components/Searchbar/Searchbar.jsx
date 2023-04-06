import React, { PureComponent } from 'react';
import {
    SearchbarHeader, Form, SearchFormButton, ButtonLabel, SearchFormInput
} from './Searchbar.styled'

export default class Searchbar extends PureComponent {
    state = {
        inputValue: '',
        isMoviesShown: false,
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
    };

    onSearch = e => {
        this.setState({ inputValue: e.currentTarget.value });
    };


    render() {
        return (
            <div>
                <SearchbarHeader>
                    <Form onSubmit={this.submitHandler}>
                        <SearchFormButton type="submit" >
                            <ButtonLabel>Search</ButtonLabel>
                        </SearchFormButton>
                        <SearchFormInput
                            type="text"
                            autocomplete="off"
                            autofocus
                            placeholder="Search images and photos"
                            onChange={this.onSearch}
                        />
                    </Form>
                </SearchbarHeader>
            </div>
        );
    }
}
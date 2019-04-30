import React from 'react';
import LisaaKukkaTable from './lisaaKukkaTable';

const LisaaUusiKukkaForm = ({ handleOnSubmit, valittu }) => {

    return (
        <form onSubmit={handleOnSubmit}>
            <LisaaKukkaTable valittu={valittu} />
        </form>
    );
};

export default LisaaUusiKukkaForm;
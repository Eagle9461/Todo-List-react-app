import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import { Row, Col } from 'reactstrap';
import Filter from './Filter';
import View from './View';
import Bulk from './Bulk';

const Controller = ({
	term,
	handleSearch,
	toggleForm,
	handleFilter,
	changeView,
	view,
	clearSelected,
	clearCompleted,
	reset
}) => {
	return (
		<div>
			<Search term={term} handleSearch={handleSearch} toggleForm={toggleForm} />
			<Row className="my-4">
				<Col md={{ size: 4 }}>
					<Filter handleFilter={handleFilter} />
				</Col>
				<Col md={{ size: 4 }}>
					<View view={view} changeView={changeView} />
				</Col>
				<Col md={{ size: 4 }} className="d-flex">
					<div className="ml-auto">
						<Bulk clearCompleted={clearCompleted} clearSelected={clearSelected} reset={reset} />
					</div>
				</Col>
			</Row>
		</div>
	);
};

Controller.propTypes = {
	term: PropTypes.string.isRequired,
	view: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	toggleForm: PropTypes.func.isRequired,
	handleFilter: PropTypes.func.isRequired,
	changeView: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired,
	clearSelected: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired
};

export default Controller;

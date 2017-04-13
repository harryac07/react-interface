import React from 'react';

class SearchAppointments extends React.Component {
	constructor(props){
		super(props);

		this.handleOrder= this.handleOrder.bind(this);
		this.handleSort = this.handleSort.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSort(e) {
		this.props.onReOrder(e.target.id,this.props.orderDir);
	}

	handleOrder(e) {
		this.props.onReOrder(this.props.orderBy, e.target.id);
	}

	handleChange(e) {
		this.props.onSearch(e.target.value);
	}//handleChange

	render() {
		return(
			<div className="row search-appointments">
			  <div className="col-sm-offset-3 col-sm-6">
			    <div className="input-group">
			      <input id="SearchApts" onChange={this.handleChange} placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" />
			      <div className="input-group-btn">
			        <button type="button" className="btn btn-primary dropdown-toggle"
			          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
			          <ul className="dropdown-menu dropdown-menu-right">
			            <li><a href="#" onClick={this.handleSort} id="petName">Pet Name {(this.props.orderBy==='petName')?<span className="glyphicon glyphicon-ok"></span>:null}</a></li>
			            <li><a href="#" onClick={this.handleSort} id="aptDate">Date {(this.props.orderBy==='aptDate')?<span className="glyphicon glyphicon-ok"></span>:null}</a></li>
			            <li><a href="#" onClick={this.handleSort} id="ownerName">Owner {(this.props.orderBy==='ownerName')?<span className="glyphicon glyphicon-ok"></span>:null}</a></li>
			            <li role="separator" className="divider"></li>
			            <li><a href="#" onClick={this.handleOrder} id="asc">Asc {(this.props.orderDir==='asc')?<span className="glyphicon glyphicon-ok"></span>:null}</a></li>
			            <li><a href="#" onClick={this.handleOrder} id="desc">Desc {(this.props.orderDir==='desc')?<span className="glyphicon glyphicon-ok"></span>:null}</a></li>
			          </ul>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
}
export default SearchAppointments;
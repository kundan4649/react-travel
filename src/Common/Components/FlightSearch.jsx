import React, { Component } from "react";
import { Container, Dropdown, Accordion, Card, Button } from "react-bootstrap";
import { resolve, reject } from "q";
import { ToastContainer, toast } from "react-toastify";
import SkyScannerApiService from '../../Common/Services/SkyScannerApiService';
import { Typeahead, Menu, MenuItem } from "react-bootstrap-typeahead";
import EllipsisWithTooltip from "react-ellipsis-with-tooltip";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
class FlightSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Partorders: 0,
      JobCreated: 0,
      flightType: 'Round',
      fromAirport: 0,
      toAirport: 0,
      cabinClass: 'Economy',
      passengerCount: 1,
      departureDate: null,
      arrivalDate: null,
      Airports: [],
      pickerOpen: 0,
    };
    this.getAirportList = this.getAirportList.bind(this);
    this.handleFlightSearch = this.handleFlightSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    this.getAirportList();
  }

  getAirportList() {
    let requestlist = { ...this.state.requestlist };
    SkyScannerApiService.GetAirportList(requestlist)
    .then((results) => {
      // Handle flight search results, you can set them to state or show in any other way
      if (results !== null) {
        let airportdata = [];
        for (const key in results.places) {
          if (Object.hasOwnProperty.call(results.places, key)) {
            const value = results.places[key];
            let item = {};
            item.id = value.entityId;
            item.parentId = value.parentId;
            item.name = value.name;
            item.iata = value.iata;
            item.label = value.name + ': ' + value.iata;
            airportdata.push(item);
          }
        }
        this.setState({ Airports: []},()=> {this.setState({Airports:airportdata});});
        }
      

      //console.log("flight")
    })
    .catch((error) => {
      console.error("Flight Search Error:", error);
      toast.error(`Flight Search Error: ${error}`);
    });
  }

  handleSelectedItem = (control, item) => {
   
    if (this != undefined) {
      let isStateChanged = true;

      let formData = { ...this.state.formData };
      
      if (control === 'fromAirport') {
        this.state.fromAirport = item.id
      }
      else if (control === 'toAirport') {
        this.state.toAirport = item.id
      }
    }
  };

  handleDatePickerChange = (dates) => {
 
    let [start, end] = [null,null];

    if(Array.isArray(dates))
    {
      [start, end] = dates;
    }
    else
      start = dates;

    this.setState({departureDate: start, arrivalDate: end,pickerOpen:1});
    
  };
  
  handleFlightSearch(e) {
    e.preventDefault();
    let requestlist = { ...this.state.requestlist };
    SkyScannerApiService.SearchFlights(requestlist)
      .then((flightResults) => {
        // Handle flight search results, you can set them to state or show in any other way
        console.log("Flight Search Results:", flightResults);
      })
      .catch((error) => {
        console.error("Flight Search Error:", error);
        toast.error(`Flight Search Error: ${error}`);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const popUpState = localStorage?.getItem("PopUpState") ? JSON.parse(localStorage?.getItem("PopUpState") || "") : {};

    if (this.state.isAccountOpen || this.state.isChangePwd) {
      return <div></div>;
    }

    return (
      <>
       
        <Container>
          <div className="flight-search-content">
          <form  >{/*onSubmit={this.handleFlightSearch}*/}
          <div  className="form-wrapper">
            <div className="react-search-form">
            <div>

            <label>
              Flight Type:
              
            </label>
              <select name="flightType" value={this.state.flightType} onChange={this.handleChange}>
                <option value="Round">Round</option>
                <option value="One way">One way</option>
              </select>

            </div>
            <div>
            <label>
        From Airport
        

      </label>
      <Typeahead

id={"ddlFromAirport"}
inputProps={{
  className: "ddlFromAirport",
  title: "defaultitemname",
}}
options={this.state.Airports}
placeholder={"Enter Airport"}
disabled={false}


renderMenu={(results, menuProps) => (
  <Menu {...menuProps}>
    {results.map((result, index) => (
      <>
      
        {this.state.Airports.length > 0}
        {result.label !== "" && (
          <MenuItem
            option={result}
            position={index}
            onWheel={() => this.hoverOutEllipsis()}
          >
            <EllipsisWithTooltip placement="bottom">
              {result.label}
            </EllipsisWithTooltip>
          </MenuItem>
        )}

        {result.name === "" && (
          <MenuItem option={result} position={index}></MenuItem>
        )}
      </>
    ))}
  </Menu>
)}
onChange={this.handleSelectedItem.bind(
  this,"fromAirport"
) }
selected={this.state.selectedFromAirport}
allowNew
//onBlur={this.handleOutsideClick.bind(this, rowIndex)}
// onKeyDown={this.onTAB.bind(this, "partname" + rowIndex.toString() + "ddl", rowIndex)}
/>
            </div>
     
      <div>
      <label>
        To Airport
        </label>
        <Typeahead

id={"ddlToAirport"}
inputProps={{
  className: "ddlToAirport",
  title: "defaultitemname",
}}
options={this.state.Airports}
placeholder={""}
disabled={false}


renderMenu={(results, menuProps) => (
  <Menu {...menuProps}>
    {results.map((result, index) => (
      <>
      
        {this.state.Airports.length > 0}
        {result.label !== "" && (
          <MenuItem
            option={result}
            position={index}
            onWheel={() => this.hoverOutEllipsis()}
          >
            <EllipsisWithTooltip placement="bottom">
              {result.label}
            </EllipsisWithTooltip>
          </MenuItem>
        )}

        {result.name === "" && (
          <MenuItem option={result} position={index}></MenuItem>
        )}
      </>
    ))}
  </Menu>
)}
onChange={this.handleSelectedItem.bind(
  this,"toAirport"
) }
selected={this.state.toAirport}
allowNew
//onBlur={this.handleOutsideClick.bind(this, rowIndex)}
// onKeyDown={this.onTAB.bind(this, "partname" + rowIndex.toString() + "ddl", rowIndex)}
/>

    
      </div>
     
     <div>
     <label>
        Cabin Class
        </label>
          <select value={this.state.cabinClass} onChange={this.handleChange}>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>
      
        </div>  
     <div>
     <label>
        Passengers
        </label>
        <input type="number" value={this.state.passengerCount} onChange={this.handleChange} />


     </div>

     <div>

     <label>
        
        Departure Date
        </label>
        <div className="date-picker-container">
        <DatePicker
        selected={this.state.departureDate === null ? new Date():this.state.departureDate}
        onChange={this.handleDatePickerChange}
        startDate={this.state.departureDate === null ? new Date():this.state.departureDate}
        endDate={this.state.arrivalDate}
        selectsRange={this.state.flightType === 'Round'}
        monthsShown={2}
        inline = {false}
        //key={this.state.pickerOpen}
        //onCalendarOpen={() => true}
        //onCalendarClose={() => false}
      />
      </div>
     </div>
      
     </div>
            <Button className="search-submit"  type="submit">SEARCH FLIGHT</Button>
            </div>
          </form>
          </div>
        </Container>
      </>
    );
  }
}

export default FlightSearch;

import React, { useEffect } from 'react';
import '../../global.css';

const VideoBackground = () => {
    return (
        <div className="video-background">
            {"VideoBackground"}
            <video autoPlay muted loop id="myVideo">
                <source src="http://localhost/wp-vaqqy/wordpress/wp-content/uploads/2024/04/Cover800x312_darken_3mb.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="content">
                {/* Your content here */}
                <h1 class="pageTitle animated-1s fadeInDown ">Fly Business &amp; First Class For Less</h1>
                <div class="airlines animated-1s fadeInDown ">
                    <div class="arlist" >
                        <div class="arlinesList_item" >
                            <img class="" src="https://airline-logo.skyluxtravel.com/common_grey/ua.svg" alt="ua" />
                        </div>
                        <div class="arlinesList_item" >
                            <img class="" src="https://airline-logo.skyluxtravel.com/common_grey/tk.svg" alt="tk" />
                            </div>
                            <div class="arlinesList_item" >
                                <img class="" src="https://airline-logo.skyluxtravel.com/common_grey/qr.svg" alt="qr"/ >
                                    </div><div class="arlinesList_item" >
                                        <img class="" src="https://airline-logo.skyluxtravel.com/common_grey/lh.svg" alt="lh" />
                                        </div>
                                        <div class="arlinesList_item" >
                                            <img class="" src="https://airline-logo.skyluxtravel.com/common_grey/ek.svg" alt="ek" />
                                            </div>
                                            <div class="arlinesList_item" >
                                                <img class="" src="https://airline-logo.skyluxtravel.com/common_grey/cx.svg" alt="cx" />
                                                </div>
                                                <div class="arlinesList_other" >
                                                    <span >and others...</span></div>
                    </div>
                </div>
                
                <div class="form-wrapper animated-1_5s fadeInUp  " >
                {/*<form class="search-form" name="searchForm" novalidate="" >
                <div class="input-wrapper" >
                <div class="flight-type" >
                <div class="flight-type-radio" >
                <input type="radio" name="flight-type" id="searchForm-FlightTypeRound" class="visually-hidden" checked="" value="RT" />
                <label for="searchForm-FlightTypeRound" >Round-Trip</label>
                <input type="radio" name="flight-type" id="searchForm-FlightTypeOneWay" class="visually-hidden" value="OW" />
                <label for="searchForm-FlightTypeOneWay" >One-Way</label></div>
                </div>
                <div class="search-form-inputs" >
                <div class="trip-inputs" >
                <div class="input-field focused" >
                <div class="input-label label-from focused" >
                <label for="searchForm-departure" >From</label>
                </div>
                <div data-qa-trip-input="rtFrom" class="f-destination-wrap rtFrom ">
                <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-searchForm-rtFrom1" aria-expanded="false" class="react-autosuggest__container"><div class="input-wrapper"><input type="search" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-searchForm-rtFrom1" class="react-autosuggest__input" placeholder="Enter City or Airport" name="departure" id="searchForm-departure" value="Toledo (TOL)"/>
               
                </div>
                </div>
                </div>
                </div>
                <div class="direction-arrows" role="button" tabindex="0" ><img src="/static/img/forms/double-arrows.png" alt="" />
                </div>
                <div class="input-field" ><div class="input-label label-to focused" ><label for="searchForm-destination" >To</label></div><div data-qa-trip-input="rtTo" class="f-destination-wrap rtTo "><div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-searchForm-rtTo1" aria-expanded="false" class="react-autosuggest__container"><div class="input-wrapper"><input type="search" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-searchForm-rtTo1" class="react-autosuggest__input" placeholder="Enter City or Airport" name="destination" id="searchForm-destination" value="Tokyo (TYO)"/>
              
                </div></div></div>
                </div>
                </div>
                <div class="calendar-inputs" ><div class="round-trip-date-style">
                <div class=" rt-input"><div class="input-label depart_date focused"><label>Departure</label></div>
                <div class="SingleDatePicker SingleDatePicker_1"><div><div class="SingleDatePickerInput SingleDatePickerInput_1 SingleDatePickerInput__withBorder SingleDatePickerInput__withBorder_2"><div class="DateInput DateInput_1"><input class="DateInput_input DateInput_input_1 DateInput_input__readOnly DateInput_input__readOnly_2" aria-label="Select Date" type="text" id="searchForm-date-from" name="searchForm-date-from" placeholder="Select Date" autocomplete="off" readonly="" aria-describedby="DateInput__screen-reader-message-searchForm-date-from" value="Mar 28, 2024"/>
                </div></div></div></div></div><div class=" rt-input"><div class="input-label arrive_date focused"><label>Arrival</label></div><div class="SingleDatePicker SingleDatePicker_1"><div><div class="SingleDatePickerInput SingleDatePickerInput_1 SingleDatePickerInput__withBorder SingleDatePickerInput__withBorder_2"><div class="DateInput DateInput_1"><input class="DateInput_input DateInput_input_1 DateInput_input__readOnly DateInput_input__readOnly_2" aria-label="Select Date" type="text" id="searchForm-date-to" name="searchForm-date-to" placeholder="Select Date" autocomplete="off" readonly="" aria-describedby="DateInput__screen-reader-message-searchForm-date-to" value="Apr 4, 2024"/>
                </div></div></div></div></div></div>
                </div>
                <div data-qa-travel-select="true" class="travel-select"><div class="input-label"><label>Passengers / Cabin</label></div>
                <div><div class="clickawayTravelSelect_wallpaper__sb8qe"></div></div>
                <div class="pd-select-arrow false"></div>
                <div class="travel-select-selection false">1 <span class="travel-select-selection-passenger">passenger</span>| Business<span class="travel-select-selection-class">Class</span></div>
           
                </div>
                <div class="search-actions SkyUIDark" >
                <button class="button_skyUIButton__XzLob  button_skyUIButton_extrinsicHeight__DpukT button_skyUIButton_solid__GwV_k search-submit" type="submit" id="searchForm-Submit" data-gtm-vis-has-fired10087461_810="1">
 
<span class="false button_skyUIButton__content__ySn_Z" data-gtm-vis-has-fired10087461_810="1">
Search flight</span></button>
                </div>
                </div>
                </div>
    </form>*/}

    
                </div>

            </div>
        </div>
    );
};

export default VideoBackground;

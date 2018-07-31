import React from 'react'
// import { Link } from 'react-router-dom';
import { Transition } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getSayings, getAllRegions, clearCurrentTag } from '../actions/getSayings'
import ImageMapper from 'react-image-mapper';
import SlanginMap from '../images/SlanginMapFinal.png'

class HomePage extends React.Component {

    handleClick = (e) => {
        const region = e.target.innerText
        this.props.getSayings(region)
    }

    componentDidMount() {
        this.props.getAllRegions()
        this.props.clearCurrentTag()
    }

    clickRegion = (region) => {        

        if (region._id.includes("western")) {
            // const region = e.target.innerText
            this.props.getSayings("western")
            this.props.history.push("/regions/western")
        } else if (region._id.includes("midwest")) {
            this.props.getSayings("midwest")
            this.props.history.push("/regions/midwest")            
        } else if (region._id.includes("southern")) {            
            this.props.getSayings("southern")
            this.props.history.push("/regions/southern")            
        } else if (region._id.includes("northeast")) {            
            this.props.getSayings("northeast")
            this.props.history.push("/regions/northeast")            
        }
    }

    load = () => {

    }

    enterRegion = (region) => {

    }

    leaveRegion = (region) => {

    }

    clickedOutside = (event) => {

    }

    render() {

        const map = {
            name: "slangin-map",
            areas: [
              { _id: "western", shape: "poly", coords: [459,72,436,72,406,70,376,66,335,56,298,50,252,42,217,36,176,26,144,20,119,12,112,17,113,25,114,38,104,34,88,25,71,15,69,26,67,40,69,59,69,78,67,93,58,123,49,145,38,167,33,184,31,202,31,224,23,237,19,250,18,272,21,292,25,310,32,333,38,345,38,359,37,377,46,393,48,403,49,415,54,428,54,442,57,450,72,456,84,465,92,475,104,478,108,488,113,499,121,506,122,519,123,528,139,530,166,532,176,532,177,540,190,547,207,562,225,570,245,579,263,590,280,592,297,593,319,599,327,598,327,587,339,587,365,587,366,580,384,581,411,584,434,582,453,582,457,439,479,439,487,318,447,314,448,261] },
              { _id: "southern" , shape: "poly", coords: [1043,314,1016,319,984,324,947,331,942,304,938,316,938,328,936,336,930,348,922,350,923,359,917,358,913,362,914,373,908,376,896,373,882,373,871,371,864,368,861,377,853,374,849,378,846,385,839,392,839,399,830,395,827,405,820,407,811,409,804,406,794,410,793,423,787,429,777,432,770,437,770,446,761,457,749,456,733,456,680,457,649,460,647,445,565,442,511,441,481,440,459,441,457,498,456,551,455,587,425,585,410,586,392,585,367,582,370,591,382,608,400,624,403,639,406,655,420,668,431,678,442,682,452,671,460,660,473,655,487,660,497,673,507,697,517,713,528,731,533,744,540,761,554,771,570,775,593,780,587,761,584,744,588,719,601,700,618,695,640,686,659,673,676,662,694,661,710,662,723,666,733,674,743,675,752,673,760,679,766,675,774,672,782,676,788,672,776,660,782,655,780,645,787,639,804,637,816,638,826,637,840,630,853,629,866,637,877,644,884,642,894,642,898,636,905,634,916,638,922,645,932,653,942,662,942,678,943,692,951,707,956,721,966,721,970,739,977,751,988,750,998,753,1002,762,994,765,1001,769,1011,767,1021,760,1020,734,1014,706,1009,681,995,659,977,628,968,599,967,573,972,570,980,557,990,539,1008,525,1011,511,1020,499,1035,499,1040,484,1052,475,1065,455,1074,431,1071,421,1063,403,1061,386,1063,361,1066,348,1067,340,1051,345,1048,358,1049,340,1047,327] },
              { _id: "midwest", shape: "poly", coords: [935,263,922,269,905,277,876,283,854,285,836,285,820,288,802,291,795,287,787,277,784,255,782,243,790,224,789,208,796,196,798,186,798,179,793,183,789,192,783,202,779,208,779,196,784,186,781,180,776,171,765,166,752,162,741,158,729,150,722,145,717,140,710,137,701,141,690,144,692,135,707,123,725,114,735,105,727,100,704,97,689,92,681,85,672,79,665,82,656,83,640,76,619,77,583,77,546,73,513,72,460,71,459,99,457,128,455,166,454,199,452,226,449,261,449,312,488,316,486,380,480,438,532,440,589,441,628,443,648,443,650,459,698,455,723,455,749,455,760,452,769,446,769,435,776,430,786,428,791,422,792,409,800,405,808,405,815,406,825,404,828,393,836,397,837,390,843,386,847,378,852,372,860,375,862,366,868,368,876,371,887,371,898,372,904,374,912,373,911,361,915,356,921,357,920,349,928,346,934,337,936,326,936,316,941,302,941,295] },
              { _id: "northeast", shape: "poly", coords: [936,261,939,275,942,296,946,315,948,328,999,320,1027,314,1044,310,1049,332,1052,341,1066,337,1064,331,1074,328,1076,312,1078,275,1086,274,1094,269,1101,270,1102,263,1113,266,1117,261,1116,253,1113,247,1117,242,1124,243,1130,238,1133,230,1134,224,1143,228,1149,230,1154,226,1154,216,1149,209,1145,214,1139,214,1135,208,1137,199,1129,191,1130,179,1134,167,1143,162,1150,159,1152,150,1153,143,1161,141,1168,141,1173,137,1176,129,1183,124,1186,111,1177,107,1165,92,1161,83,1157,60,1153,47,1147,42,1140,46,1130,48,1119,42,1116,55,1113,75,1113,89,1114,105,1111,110,1111,118,1107,124,1095,125,1095,134,1087,135,1072,139,1065,144,1056,144,1046,147,1028,164,1018,177,1012,186,1012,194,1009,200,998,208,983,211,971,212,963,216,959,225,963,231] },
            ]
          }


        return (
            <div className="margin-top">
                <br />
                <Transition visible={true} transitionOnMount={true}>
                <div id="map">
                    <ImageMapper src={SlanginMap} map={map} width={1200} height={800} 
                        fillColor="rgba(0, 0, 0, 0.25)"
                        onLoad={() => this.load()}
                        onClick={region => this.clickRegion(region)}
                        onMouseEnter={region => this.enterRegion(region)}
                        onMouseLeave={region => this.leaveRegion(region)}
                        onImageClick={event => this.clickedOutside(event)}
                        />
                </div>
                </Transition>
                <br/>
                {/* <Link to="/regions/western" >
                    <Button onClick={this.handleClick} content='Western' color="orange" />            
                    </Link>
                    <Link to="/regions/midwest" >
                    <Button onClick={this.handleClick} content='Midwest' color="olive" />                
                    </Link>
                    <Link to="/regions/southern" >
                    <Button onClick={this.handleClick} content='Southern' color="teal"/>                
                    </Link>
                    <Link to="/regions/northeast" >
                    <Button onClick={this.handleClick} content='Northeast' color="violet" />                
                </Link> */}
            </div>
        )
    }
}



export default connect(null, { getAllRegions, getSayings, clearCurrentTag })(HomePage)

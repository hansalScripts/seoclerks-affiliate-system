import axios from 'axios';

const Endpoint = (searchParams) => {

    const baseURL = "https://fcash.us/seoclerks-response.php";

    const params = searchParams[0];

    console.log(params);

    const request = () => {
        try {
            return axios.get(baseURL, {
                headers: null,
                mode: 'no-cors',
                params: {
                    url: 'https://www.seoclerks.com/api', // seoclerks url
                    type: 'inlinead', // define search type
                    s: params.s ? params.s : null,      // search items
                    dt: 'services',    // search where #defaults "services"
                    st: params.st ? params.st : 'services',    // search section #default "services"
                    aff: params.aff ? params.aff : 721499,  // affiliate ID
                    by: params.by ? params.by : null,    // search by username #default NULL
                    mp: params.mp ? params.mp : null,    // minimum prize #default NULL
                    p: params.p ? params.p : null,      // maximum prize #default NULL
                    c: params.c ? params.c : 0,      // search categories #default "0" for All 
                    ul: params.ul ? params.ul : 1,    // define minimum user level #default "1" possible => 1, 2, 3, 4
                    am: params.am ? params.am : 40,    // the amount of items #default "40" between 1-40
                    ins: params.ins ? 1 : 0,  // Only select Instant download items #default "0" possible => 0, 1 
                    g: params.g ? 1 : 0,      // Only select services that are guaranteed #default "0" possible => 0, 1 
                    sub: params.sub ? 1 : 0,  // Only select services/items require subscription #default "0" possible => 0, 1 
                    os: params.os ? 1 : 0,    // Only select services that are currently on sale #default "0" possible => 0, 1
                    ca: params.ca ? 1 : 0,    // define custom affiliate amount 0 for any amount
                    oby: params.oby ? params.oby : 'services',  // How this data is ordered "custom order depends on services section"
                    oh: params.oh ? 'ASC' : null,    // Ascending or Descending #default NULL, possible "ASC"
                    f: 'json'       // format default "json"
                },
            })
        } catch (error) { 
            console.log(error.message)
        }
    }
    
    return request();
}

export default Endpoint;
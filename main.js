function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
	read_object(sURLVariables);
    return sURLVariables;
};

function read_object(object_all_params){
	first_access = is_first_access(object_all_params);
	if(first_access){
		add_url_params("tour=0");
	}
	for(param in object_all_params){

	}
}

function is_first_access(object_all_params){
	if(JSON.stringify(object_all_params).indexOf('tour') >= 0){
		return false;
	} else {
		return true;
	}
}

function add_url_params(params){
	window.location.search = window.location.search + "&" + params;
}

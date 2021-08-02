const swufe = {};


swufe.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = swufe.rankingFullName[name];
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "swufe " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

swufe.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking = swufe.rankingFullNameEn[name];
	if (ranking == null) {
		ranking = ""
		var pattern = /(?<=THE ).*/;
		if (name.match(pattern)){
			var new_ranking = swufe.rankingFullNameEn[name.match(pattern)[0]];
			if (new_ranking){
				ranking = "swufe " + new_ranking;
			}
		}
	} else {
		ranking = "swufe " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

swufe.CCFgetRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking = ccf.rankingFullName[name];
		console.log(ranking);
	if (ranking == null || ranking == "" || ranking == undefined) {
		ranking = ""
	}
	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}


swufe.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "swufe A") {
			return 'swufe-A';
		} else if (result == "swufe A+") {
			return 'swufe-AA';
		} else if (result == "swufe B") {
			return 'swufe-B';
		} else if (result == "swufe C") {
			return 'swufe-C';
		} 
	}
	return 'swufe-none';
}

swufe.getRankingSpan = function(name) {
	let rankingInfo = swufe.getRankingInfo(name);
	let span = $('<span>').addClass(swufe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (swufe.getRankingClass(rankingInfo.rankings) != "swufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

swufe.getRankingSpanEn = function(name) {
	let rankingInfo = swufe.getRankingInfoEn(name);
	let span = $('<span>').addClass(swufe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (swufe.getRankingClass(rankingInfo.rankings) != "swufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

swufe.CCFgetRankingSpanEn= function(name) {
	let rankingInfo = swufe.CCFgetRankingInfoEn(name);
	if (rankingInfo.rankings != "") {
		var span = $('<span>').addClass('ccf-ranking').addClass(ccf.getRankingClass(rankingInfo.rankings)).text(
			'CCF ' + rankingInfo.rankings.join('/'));
	}
	if (swufe.getRankingClass(rankingInfo.rankings) != "swufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}


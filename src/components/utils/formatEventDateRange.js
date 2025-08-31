function getDayWithSuffix(day) {
	const j = day % 10,
		k = day % 100;
	if (j === 1 && k !== 11) return day + "<sup>st</sup>";
	if (j === 2 && k !== 12) return day + "<sup>nd</sup>";
	if (j === 3 && k !== 13) return day + "<sup>rd</sup>";
	return day + "<sup>th</sup>";
}

export function formatEventDateRange(startDateStr, endDateStr) {
    const startDate = new Date(startDateStr);
	const endDate = new Date(endDateStr);

	const startDay = getDayWithSuffix(startDate.getDate());
	const endDay = getDayWithSuffix(endDate.getDate());

	const startMonth = startDate.toLocaleString("default", { month: "long" });
	const endMonth = endDate.toLocaleString("default", { month: "long" });

	const startYear = startDate.getFullYear();
	const endYear = endDate.getFullYear();

	// Same day
	if (startDateStr === endDateStr) {
		return `${endDay} ${endMonth}, ${endYear}`;
	}

	// Same year
	if (startYear === endYear) {
		// Same month
		if (startMonth === endMonth) {
			return `${startDay} - ${endDay} ${endMonth}, ${endYear}`;
		} else {
			return `${startDay} ${startMonth} - ${endDay} ${endMonth}, ${endYear}`;
		}
	}

	// Different year
	return `${startDay} ${startMonth}, ${startYear} - ${endDay} ${endMonth}, ${endYear}`;
}

export function formatEventDateRangeV2(dateStr){
	// return dateStr.replace(/th/g, `<sup>th</sup>`);
	return dateStr?.replace(/th/g, "<sup>th</sup>") || "";
}
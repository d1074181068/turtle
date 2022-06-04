function location_href(data_id, kind) {
    document.location.href = `./intro_detail_${kind}.html?${data_id}&${kind}`;
}
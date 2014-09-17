$('#inciweb').feeds({
    feeds: {
        feed1: 'http://inciweb.nwcg.gov/feeds/rss/articles/incident/4093/',      
    }
});

$('#odf').feeds({
    feeds: {
        feed1: 'http://wildfireoregondeptofforestry.blogspot.com/feeds/posts/default',      
    },
    max: 4
});
$('#googlenews').feeds({
    feeds: {
        feed1: 'https://news.google.com/news/feeds?gl=us&hl=en&ie=UTF-8&output=rss&q=Deception%20complex%20fire%20Oakridge&um=1',    

    },
    max: 10
});



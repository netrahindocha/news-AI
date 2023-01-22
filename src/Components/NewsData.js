import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import "../Styling/NewsData.css";

const NewsData = (props) => {

    const [articles, setArticles] = useState([]);

    const updateNews = async () => {
        const url = "https://newsapi.org/v2/top-headlines?country=ca&category=general&apiKey=48753e7eee184f03b80ebfddb963ecf2&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
    }

    useEffect(() => {
        updateNews();
    }, [])

  return (
    
    <div id='newsData'>

            <div className="headlines">
                <p>Top Headlines of the Day</p>
                <select name="country" id="country" className="minimal">
                    <option value="Argentina" id="ar">Argentina</option>
                    <option value="Austria" id="at">Austria</option>
                    <option value="Australia" id="au">Australia</option>
                    <option value="Belgium" id="be">Belgium</option>
                    <option value="Brazil" id="br">Brazil</option>
                    <option value="Bulgaria" id="bg">Bulgaria</option>
                    <option value="Canada" id="ca">Canada</option>
                    <option value="China" id="cn">China</option>
                    <option value="Colombia" id="co">Colombia</option>
                    <option value="Cuba" id="cu">Cuba</option>
                    <option value="Czechia" id="cz">Czechia</option>
                    <option value="Egypt" id="eg">Egypt</option>
                    <option value="France" id="fr">France</option>
                    <option value="Germany" id="de">Germany</option>
                    <option value="Greece" id="gr">Greece</option>
                    <option value="Hong Kong" id="hk">Hong Kong</option>
                    <option value="Hungary" id="hu">Hungary</option>
                    <option value="India" id="in">India</option>
                    <option value="Indonesia" id="id">Indonesia</option>
                    <option value="Ireland" id="ie">Ireland</option>
                    <option value="Israel" id="il">Israel</option>
                    <option value="Italy" id="it">Italy</option>
                    <option value="Japan" id="jp">Japan</option>
                    <option value="Korea" id="kr">Korea</option>
                    <option value="Latvia" id="lv">Latvia</option>
                    <option value="Lithuania" id="lt">Lithuania</option>
                    <option value="Malaysia" id="my">Malaysia</option>
                    <option value="Mexico" id="mx">Mexico</option>
                    <option value="Morocco" id="ma">Morocco</option>
                    <option value="Netherlands" id="nl">Netherlands</option>
                    <option value="New Zealand" id="nz">New Zealand</option>
                    <option value="Nigeria" id="ng">Nigeria</option>
                    <option value="Norway" id="no">Norway</option>
                    <option value="Philippines" id="ph">Philippines</option>
                    <option value="Poland" id="pl">Poland</option>
                    <option value="Portugal" id="pt">Portugal</option>
                    <option value="Romania" id="ro">Romania</option>
                    <option value="Russia" id="ru">Russia</option>
                    <option value="Saudi Arabia" id="sa">Saudi Arabia</option>
                    <option value="Serbia" id="rs">Serbia</option>
                    <option value="Singapore" id="sg">Singapore</option>
                    <option value="Slovakia" id="sk">Slovakia</option>
                    <option value="Slovenia" id="si">Slovenia</option>
                    <option value="South Africa" id="za">South Africa</option>
                    <option value="Sweden" id="se">Sweden</option>
                    <option value="Switzerland" id="ch">Switzerland</option>
                    <option value="Taiwan" id="tw">Taiwan</option>
                    <option value="Thailand" id="th">Thailand</option>
                    <option value="Turkey" id="tr">Turkey</option>
                    <option value="Ukraine" id="ua">Ukraine</option>
                    <option value="United Arab Emirates" id="ae">Arab Emirates</option>
                    <option value="United Kingdom" id="gb">United Kingdom</option>
                    <option value="United States of America" id="us">United States of America</option>
                    <option value="Venezuela" id="ve">Venezuela</option>
                </select>
            </div>

            <div id="fetchData">
            {articles.map((element) => {
                
                return <NewsCard title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} />

            })}
            </div>

        </div>

  )
}

export default NewsData
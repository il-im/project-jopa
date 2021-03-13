const {DATABASE_NEWS} = require('../database/db')
exports.getNews = async(request ,response)=>{
    try {                                
       const lang = request.headers.language
      
      const filteredNews = DATABASE_NEWS.filter((n) =>{
           return n.lang === lang
       })
       console.log(lang)
        response.status(200).json (filteredNews)
    }catch(e){
        response.status(500).json(e.message)
    }
}

exports.getOneNews = async (req,res) => {
    try{
    const news = DATABASE_NEWS.find(news => news.id ===req.params.newsId)
    if(!news) {
        return res.status(404).json('news is not founded')
    }
    return res.status(200).json(news)
    }catch(e){
        console.error(e.message)
        res.staus(500).json('server falled')
    }
}
exports.createNews =  async (req, res) => {
    try {
        const news = req.body
        news.date = new Date()
        DATABASE_NEWS.push(news)
        response.status(201).json({
            message: 'новость создана',
            allNews: DATABASE_NEWS
        });
    } catch (e) {
        console.log(e)
    }
}

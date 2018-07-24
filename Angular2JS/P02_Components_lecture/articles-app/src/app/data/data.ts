import { Article } from '../models/article.model';
import ARTICLES from './seed';

export class ArticleData {

    getData(): Article[] {
        let articles: Article[] = [];

        for (let i = 0; i < ARTICLES.length; i++) {
            let article = ARTICLES[i];
            articles[i] = new Article(article.title, article.description, article.author, article.imageUrl);
        }
        return articles;
    }
}
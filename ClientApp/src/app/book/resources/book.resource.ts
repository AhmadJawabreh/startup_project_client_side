import { AuthorResource } from 'src/app/author/resource/author.resource';
import { PublisherResource } from './../../publisher/resources/publisher.resource';
export class BookResource {

  public id: number;
  public name: string;
  public releaseDate: Date;
  public publisher: PublisherResource;
  public authorResources: Array<AuthorResource>;

  constructor(id: number, name: string, releaseDate: Date, publisher: PublisherResource, authorResources: Array<AuthorResource>) {
    this.id = id;
    this.name = name;
    this.releaseDate = releaseDate;
    this.publisher = publisher;
    this.authorResources = authorResources;
  }

}

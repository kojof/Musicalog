export class Album {
    Id: number;
    Name: string;
    Artist: string;
    Label: string;
    AlbumType: {
        Name: string;
        Id: number;
    };
    Stock: number;
};
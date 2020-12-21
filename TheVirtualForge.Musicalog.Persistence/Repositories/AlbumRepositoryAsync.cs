using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheVirtualForge.Musicalog.Application.DTOs;
using TheVirtualForge.Musicalog.Application.Interfaces.Repositories;
using TheVirtualForge.Musicalog.Domain.Entities;
using System.Linq.Dynamic;

namespace TheVirtualForge.Musicalog.Persistence.Repositories
{
    public class AlbumRepositoryAsync: GenericRepositoryAsync<Album>, IAlbumRepositoryAsync
    {
        private readonly DbSet<Album> _albums;
        private readonly MusicalogContext _dbContext;

        public AlbumRepositoryAsync(MusicalogContext dbContext) : base(dbContext)
        {
            _albums = dbContext.Set<Album>();
            _dbContext = dbContext;
        }

        private MusicalogContext MusicalogContext
        {
            get { return _dbContext as MusicalogContext; }
        }

        public async Task<AlbumPagedResponse> GetPagedReponseAsync(int pageNumber, int pageSize, string sortBy, bool sortOrder)
        {
            AlbumPagedResponse AlbumPagedResponse = new AlbumPagedResponse();
            List<Album> albums = await _albums.Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .Include(x => x.AlbumType)
                .AsNoTracking()
                .ToListAsync();

            AlbumPagedResponse.Albums = OrderByQuery(albums, sortBy, sortOrder);
            AlbumPagedResponse.TotalCount = await _albums.CountAsync();

            return AlbumPagedResponse;
        }

        public async Task<IEnumerable<Album>> GetAllAsync()
        {
            List<Album> albums = await _albums
                .Include(x => x.AlbumType)
                .AsNoTracking()
                .ToListAsync();
            return albums;

        }

        public async Task DeleteAsync(int id)
        {
            var album = await  GetByIdAsync(id);

            if (album != null)
            {
                 _albums.Remove(album);
                await _dbContext.SaveChangesAsync();
            }
          
        }

        public async Task AddAsync(Album album)
        {
            try
            {
                Album newAlbum = new Album
                {
                    AlbumTypeId = album.AlbumType.Id,
                    Artist = album.Artist,
                    Label = album.Label,
                    Name = album.Name,
                    Stock = album.Stock
                };

                await _albums.AddAsync(newAlbum);
                await _dbContext.SaveChangesAsync();
            }

            catch (Exception ex)
            {
                Console.Write(ex);
            }
        }

        public async Task UpdateAsync(Album album)
        {
            try
            {
                //Album newAlbum = new Album
                //{
                //    AlbumTypeId = album.AlbumType.Id,
                //    Artist = album.Artist,
                //    Label = album.Label,
                //    Name = album.Name,
                //    Stock = album.Stock
                //};

                _albums.Update(album);
                await _dbContext.SaveChangesAsync();
            }

            catch (Exception ex)
            {
                Console.Write(ex);
            }
        }


        private  static List<Album> OrderByQuery(List<Album> data, string columnName, bool isAscending)
        {
            string sort = isAscending ? "ascending" : "descending";
            var source = data.AsQueryable();
            return source.OrderBy(columnName + " " + sort).ToList();
        }
    }

}


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheVirtualForge.Musicalog.Application.Interfaces.Repositories;
using TheVirtualForge.Musicalog.Application.Interfaces.Services;
using TheVirtualForge.Musicalog.Domain.Entities;

namespace TheVirtualForge.Musicalog.Application.Services
{
    public class AlbumService:  IAlbumService
    {
        private readonly IAlbumRepositoryAsync _albumRepositoryAsync;
        public AlbumService(IAlbumRepositoryAsync albumRepositoryAsync)
        {
            _albumRepositoryAsync = albumRepositoryAsync;
        }

        public async Task<AlbumPagedResponse> GetPagedReponseAsync(int pageNumber, int pageSize, string sortBy, bool sortOrder)
        {
            var albums = await _albumRepositoryAsync.GetPagedReponseAsync(pageNumber, pageSize, sortBy, sortOrder);

            return albums;
        }

        public async Task<IEnumerable<Album>> GetAllAsync()
        {
            var albums = await _albumRepositoryAsync.GetAllAsync();

            return albums;
        }

        public async Task DeleteAsync(int id)
        {
            await _albumRepositoryAsync.DeleteAsync(id);
        }

        public async Task AddAsync(Album album)
        {
            await _albumRepositoryAsync.AddAsync(album);
        }

        public async Task EditAsync(Album album)
        {
            await _albumRepositoryAsync.UpdateAsync(album);
        }

        public async Task<Album> GetById(int id)
        {
            var album = await  _albumRepositoryAsync.GetByIdAsync(id);
            return album;
        }
    }
}

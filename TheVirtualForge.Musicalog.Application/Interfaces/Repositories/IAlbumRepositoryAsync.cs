using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheVirtualForge.Musicalog.Domain.Entities;
using System.Collections.Generic;
using TheVirtualForge.Musicalog.Application.DTOs;

namespace TheVirtualForge.Musicalog.Application.Interfaces.Repositories
{
    public interface IAlbumRepositoryAsync : IGenericRepositoryAsync<Album>
    {
        Task<AlbumPagedResponse> GetPagedReponseAsync(int pageNumber, int pageSize, string sortBy, bool sortOrder);
        Task<IEnumerable<Album>> GetAllAsync();
        Task DeleteAsync(int id);
        Task AddAsync(Album album);
    }
}

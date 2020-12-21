using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheVirtualForge.Musicalog.Application.DTOs;
using TheVirtualForge.Musicalog.Domain.Entities;

namespace TheVirtualForge.Musicalog.Application.Interfaces.Services
{
    public interface IAlbumService
    {
        
        Task<AlbumPagedResponse> GetPagedReponseAsync(int pageNumber, int pageSize, string sortBy, bool sortOrder);
        Task<Album> GetById(int id);
        Task<IEnumerable<Album>> GetAllAsync();
        Task DeleteAsync(int id);

        Task AddAsync(Album album);
        Task EditAsync(Album album);
    }
}

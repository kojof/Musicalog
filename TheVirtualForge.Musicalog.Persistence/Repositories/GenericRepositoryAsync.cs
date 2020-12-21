using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheVirtualForge.Musicalog.Application.Interfaces.Repositories;

namespace TheVirtualForge.Musicalog.Persistence.Repositories
{
    public class GenericRepositoryAsync<T> : IGenericRepositoryAsync<T> where T : class
    {

        private readonly MusicalogContext _dbContext;


        public IQueryable<T> Entities => _dbContext.Set<T>();

        public GenericRepositoryAsync(MusicalogContext dbContext)
        {
            _dbContext = dbContext;
        }

        public virtual async Task<T> GetByIdAsync(int id)
        {
            return await _dbContext.Set<T>().FindAsync(id);
        }

        public Task<IReadOnlyList<T>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<IReadOnlyList<T>> GetPagedReponseAsync(int pageNumber, int pageSize)
        {
            return await _dbContext
                .Set<T>()
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<T> AddAsync(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
            return entity;
        }

        public Task UpdateAsync(T entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            return Task.CompletedTask;
        }

       

        //public async Task<IReadOnlyList<T>> GetAllAsync()
        //{
        //    if (!_cacheService(cacheTech).TryGet(cacheKey, out IReadOnlyList<T> cachedList))
        //    {
        //        cachedList = await _dbContext
        //         .Set<T>()
        //         .ToListAsync();
        //        _cacheService(cacheTech).Set(cacheKey, cachedList);
        //    }
        //    return cachedList;
        //}
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using TheVirtualForge.Musicalog.Application.Interfaces.Repositories;

namespace TheVirtualForge.Musicalog.Persistence.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly MusicalogContext _dbContext;
        private bool disposed;

        public UnitOfWork(MusicalogContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        public async Task<int> Commit(CancellationToken cancellationToken)
        {
            return await _dbContext.SaveChangesAsync(cancellationToken);
        }

        public Task Rollback()
        {
            //todo
            return Task.CompletedTask;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    //dispose managed resources
                    _dbContext.Dispose();
                }
            }

            //dispose unmanaged resources
            disposed = true;
        }
    }
}

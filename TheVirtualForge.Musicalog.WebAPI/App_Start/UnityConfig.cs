using System.Web.Http;
using AutoMapper;
using TheVirtualForge.Musicalog.Application.Interfaces.Repositories;
using TheVirtualForge.Musicalog.Application.Interfaces.Services;
using TheVirtualForge.Musicalog.Application.Mappings;
using TheVirtualForge.Musicalog.Application.Services;
using TheVirtualForge.Musicalog.Persistence.Repositories;
using Unity;
using Unity.WebApi;

namespace TheVirtualForge.Musicalog.WebAPI
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<IAlbumService, AlbumService>();
            container.RegisterType<IAlbumRepositoryAsync, AlbumRepositoryAsync>();

            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });

            container.RegisterInstance<IMapper>(config.CreateMapper());
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}
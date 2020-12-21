using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using TheVirtualForge.Musicalog.Application.DTOs;
using TheVirtualForge.Musicalog.Domain.Entities;

namespace TheVirtualForge.Musicalog.Application.Mappings
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Album, AlbumDTO>();
            CreateMap<AlbumPagedResponse, AlbumPagedResponseDTO>();
            CreateMap<AlbumDTO, Album>();
        }
    }
}

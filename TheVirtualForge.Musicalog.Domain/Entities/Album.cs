namespace TheVirtualForge.Musicalog.Domain.Entities
{
    public partial class Album
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public string Label { get; set; }
        public int AlbumTypeId { get; set; }
        public int Stock { get; set; }

        public virtual AlbumType AlbumType { get; set; }
    }
}
